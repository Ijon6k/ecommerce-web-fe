const Navtab = ({ custom }) => {
  const Navs = [
    { id: 1, title: "Dummy Plant" },
    { id: 2, title: "Meja & Kursi" },
    { id: 3, title: "Perabotan Dapur" },
  ];
  return (
    <div className={` ml-10 flex w-fit items-center gap-10  ${custom}`}>
      {Navs.map((nav) => (
        <div key={nav.id} className="flex justify-center">
          <button className="text-xl font-bold text-black">{nav.title}</button>
      </div>
      ))}
    </div>
  );
};

export default Navtab;
