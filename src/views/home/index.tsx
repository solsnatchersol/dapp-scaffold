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

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <div className='mt-6'>
        
       <img src="/feedme.png"></img>
        </div>
        <div className="flex flex-col mt-2">
          <video
            src="https://solsnatcher.xyz/wp-content/uploads/2024/01/SOLsnatcher.mp4#t=-1"
            width="100%"
            autoPlay
            muted
            loop
          /></div>
        <div className="flex flex-col mt-2">
          <RequestAirdrop />
          <CandyMint />
          <h4 className="md:w-full text-2xl text-slate-300 my-2">
          {wallet &&
          <div className="flex flex-row justify-center">
            <div className='text-slate-600 ml-2'>
                Balance:&nbsp;
              </div>
            <div>
              {(balance || 0).toLocaleString()}
              </div>
              <div className='text-slate-600 ml-2'>
                SOL
              </div>
            <div className="flex flex-row justify-center">
            <div><img src="/collection.png"></img></div>
            </div>
          
          </div>
            
            
          }
          </h4>
        </div>
      </div>
    </div>
  );
};
