function NavBar() {
  return (
    <>
      <div className="max-h-[25vh] min-h-[25vh] font-bold text-[15vh] flex justify-center items-center">
        <p>TRISK4Y</p>
      </div>
      <div className="flex justify-center items-center gap-16 sticky top-0 text-2xl [&>p:hover]:bg-white/75 [&>p]:p-1 [&>p]:pb-0 [&>p]:pt-0">
        <p>Home</p>
        <p>Portfolio</p>
        <p>Blog</p>
      </div>
    </>
  );
}

export default NavBar;
