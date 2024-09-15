export const CardServico = ({children}: {children: React.ReactNode}) => {
  return <div className="flex items-center justify-center">
  <p className="bg-zinc-800 py-5 w-full text-center rounded-md text-zinc-200 text-[20px] px-2">
    {children}
  </p>
</div>;
};
 