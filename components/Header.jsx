const Header = () => {
  return (
    <header className="bg-clinic-blue text-white px-6 py-2 shadow-sm">
      <div className="flex items-center justify-end">
        <div className="text-2xl font-bold">
          <span className="text-clinic-logo-red leading-none text-white-outline">
            CLINICA
          </span>{" "}
          <span className="text-clinic-logo-blue leading-none text-white-outline">
            ALVAREZ
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
