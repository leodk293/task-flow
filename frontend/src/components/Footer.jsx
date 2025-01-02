const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className=" mt-[80px] flex flex-col py-10 items-center gap-5 border border-transparent bg-black w-full">

      <ul className=" text-xl font-semibold text-white flex flex-wrap gap-5">
        <li><a href="">Twitter</a></li>
        <li><a href="">Facebook</a></li>
        <li><a href="">Linkedin</a></li>
      </ul>

      <div className=" h-[1px] rounded-[5px] bg-white md:w-[60rem]"/>

      <p className="text-white font-semibold">© {year} <span className='font-extrabold'>Task-Flow</span>. All Rights Reserved.</p>



    </footer>
  )
}

export default Footer