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
              border-image: linear-gradient(to right, #9D50BB, #6E48AA) 1;
            }
            50% {
              border-image: linear-gradient(to right, #B485B7, #8C6EA8) 1;
            }
          }
          .custom-gradient-border {
            animation: pulseBorder 2s infinite;
            border-image: linear-gradient(to right, #9D50BB, #6E48AA) 1;
            border-image-slice: 1;
          }
        `}
      </style>
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col border-4 p-8 rounded-lg bg-black custom-gradient-border">
          <div className='mt-6'>
            <img src="/feedme.png" alt="Feed Me Logo" />
          </div>
          <div className="flex flex-col mt-2">
            <video
              src="https://solsnatcher.xyz/wp-content/uploads/2024/01/SOLsnatcher.mp4#t=-1"
              width="100%"
              autoPlay
              muted
              loop
            />
          </div>
          <div className="flex flex-col mt-2">
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
    </>
  );
};
