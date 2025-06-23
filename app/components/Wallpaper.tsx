export default function Wallpaper({children, src}: React.PropsWithChildren<{src: string}>) {
  return (
    <div className="relative w-full h-screen mb-30 ">
      <div className="absolute inset-0 z-0">
        <img
          src={`${src}`}
          alt="Wallpaper"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
}