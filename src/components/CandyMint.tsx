//...Default Imports (we will replace these later)

export const CandyMint: FC = () => {
    // 👇 Update these constant declarations
    const { connection } = useConnection();
    const wallet = useWallet();
    const { getUserSOLBalance } = useUserSOLBalanceStore();

    // TODO - Create an Umi instance

    // 👇 Update this onClick function
    const onClick = useCallback(async () => {
      if (!publicKey) {
          console.log('error', 'Wallet not connected!');
          notify({ type: 'error', message: 'error', description: 'Wallet not connected!' });
          return;
      }
      // TODO - Add minting logic here
    }, []);

    return (
        <div className="flex flex-row justify-center">
            <div className="relative group items-center">
                <div className="m-1 absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-fuchsia-500 
                    rounded-lg blur opacity-20 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button
                    className="px-8 m-2 btn animate-pulse bg-gradient-to-br from-indigo-500 to-fuchsia-500 hover:from-white hover:to-purple-300 text-black"
                    onClick={onClick}
                >
                    <span>Mint NFT </span>
                </button>
            </div>
        </div>
    );
};
