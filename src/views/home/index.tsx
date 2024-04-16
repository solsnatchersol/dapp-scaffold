// Next, React
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

// Wallet
import { useWallet, useConnection } from '@solana/wallet-adapter-react';

// Components
import { RequestAirdrop } from '../../components/RequestAirdrop';
import { CandyMint } from '../../components/CandyMint';
import pkg from '../../../package.json';

// Store
import useUserSOLBalanceStore from '../../stores/useUserSOLBalanceStore';

export const HomeView: FC = ({ }) => {
  const wallet = useWallet();
  const { connection } = useConnection();

  const balance = useUserSOLBalanceStore((s) => s.balance)
  const { getUserSOLBalance } = useUserSOLBalanceStore()

  useEffect(() => {
    if (wallet.publicKey) {
      console.log(wallet.publicKey.toBase58())
      getUserSOLBalance(wallet.publicKey, connection)
    }
  }, [wallet.publicKey, connection, getUserSOLBalance])

  return (
    <>
      <style>
        {`
          @keyframes pulseBorder {
            0%, 100% {
              background-image: linear-gradient(to right, #9D50BB, #6E48AA);
            }
            50% {
              background-image: linear-gradient(to right, #B485B7, #8C6EA8);
            }
          }
          .custom-gradient-border {
            animation: pulseBorder 2s infinite;
            padding: 8px; // Increased padding for the border
            border-radius: 8px;
            overflow: hidden;
          }
          .inner-content {
            background: black;
            border-radius: 8px;
            padding: 20px; // Increased padding inside the content area
          }
        `}
      </style>
      <div className="md:hero mx-auto p-4">
        <div className="custom-gradient-border">
          <div className="inner-content flex flex-col items-center">
            <div className='mt-6 w-full flex justify-center'>
              <img src="/feedme.png" alt="Feed Me Logo" />
            </div>
            <div className="flex flex-col mt-2 w-full">
              <video
                src="/video.mp4"
                width="100%"
                autoPlay
                muted
                loop
              />
            </div>
            <div className="flex flex-col mt-2 w-full">
              <RequestAirdrop />
              <CandyMint />
              <h4 className="text-2xl text-slate-300 mt-4 mb-2">
                {wallet && (
                  <div className="flex flex-row justify-center">
                    <span className='text-slate-600'>Balance:&nbsp;</span>
                    <span>{(balance || 0).toLocaleString()} SOL</span>
                  </div>
                )}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
