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
  <div className="md:hero mx-auto p-4" style={{ 
    backgroundImage: 'url("/bg.png")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center center', 
    backgroundBlendMode: 'overlay', 
    backgroundColor: 'rgba(0,0,0,0.5)', // This adds a black overlay at 50% opacity
    width: '100vw', // Ensure it covers the full width of the viewport
    minHeight: '100vh', // Optionally, cover the full viewport height as well
    position: 'absolute', // Make it cover the full screen regardless of other content
    top: 0,
    left: 0
  }}>
    <div className="md:hero-content flex flex-col border-2 border-white rounded-lg p-8 bg-black bg-opacity-50">
      <div className='mt-6 w-full flex justify-center'>
        <img src="/feedme.png" alt="Feed Me Logo" />
      </div>
      <div className="flex flex-col mt-2 w-full">
        <video
          src="https://solsnatcher.xyz/wp-content/uploads/2024/01/SOLsnatcher.mp4#t=-1"
          width="100%"
          autoPlay
          muted
          loop
          playsInline  // This is crucial for iOS devices
          preload="auto"
        >
        </video>
      </div>
      <div className="flex flex-col mt-2 w-full">
        
        <CandyMint />

        <h4 className="text-2xl text-slate-300 mt-4 mb-2">
          <div className="flex flex-row justify-center">
            <span className='text-slate-600'>Price:&nbsp;</span>
            <span> 0.1 SOL</span>
          </div>
        </h4>
        
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
);

};
