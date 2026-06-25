/*
 * Authors: Ash Burn, Patrick Cook
 * Date: June 24th, 2026
 * Program: NavBar
 *
 * Description: NavBar component to be used in the layout. Simply defines the NavBar with the School name and some fake page names with anchor tags. The anchor tags do not lead anywhere and are for aesthetics.  
 */

const Navbar = () => {
  return (
  <>
    <div className = "text-slate-700 py-2.5 px-4 text-lg font-bold">NGHS</div>
    <nav className = "text-slate-50 flex gap-4 bg-slate-700 mb-6 py-1.5 px-4">
      <div><a href="#" >Students</a></div>
      <div><a href="#" >Calendar</a></div>
      <div><a href="#" >News</a></div>
    </nav>


  </>
  );
};

export default Navbar;
