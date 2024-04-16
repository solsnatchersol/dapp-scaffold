return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col border-2 border-white rounded-lg p-8 bg-black bg-opacity-20">
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
          />
        </div>
        <div className="flex flex-col mt-2 w-full">
          
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
  );
};
