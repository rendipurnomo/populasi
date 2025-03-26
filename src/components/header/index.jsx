import Logo from '../../assets/ppa.png'

const Header = () => {
  return (
    <header className='w-full h-[20vh] flex justify-center items-center bg-black'>
        <h1 className='font-bold text-white'>POPULASI UNIT SUPP</h1>
      <img className='rounded-full w-5 h-5 mx-0.5' src={Logo} alt="logo" />
      <h1 className='font-bold text-white'>RT</h1>
    </header>
  )
}

export default Header