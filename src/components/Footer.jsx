const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer className="footer bg-[#5d0c1d] flex justify-center p-6 text-white">
      <p className="text-xl">
        Copyright &copy; {currYear}, Made with 💗 by <strong>Mithlesh</strong>
      </p>
    </footer>
  );
};

export default Footer;
