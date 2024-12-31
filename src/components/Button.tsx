type Props = {
  children: React.ReactNode;
  className?: string;  // className is optional
};
export const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={`text-sm font-medium relative py-2 px-3 rounded-lg bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] ${className}`}>
        {/* For border gradient */}
        <div className="absolute inset-0 ">
            {/* Top border */}
            <div className="absolute inset-0 rounded-lg border border-white/20 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            {/* Bottom border */}
            <div className="absolute inset-0 rounded-lg border border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            {/* Inside button shadow : Gradient look */}
            <div className='absolute inset-0 rounded-lg shadow-[0_0_10px_rgb(140,69,255,.7)_inset]'></div>
        </div>
        <span>{children}</span>
    </button>
  )
}