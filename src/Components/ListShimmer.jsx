const ListShimmer = () => {
  const Item = () => (
    <div className="w-7/12 min-w-[800px] mx-16 my-7 h-72 rounded-2xl shadow-lg border flex animate-pulse">
      <div className="w-[400px] border bg-slate-200 rounded-2xl"></div>
      <div className="p-4 text-base w-[calc(100%-400px)]">
        <div className="w-1/3 bg-slate-300 h-10 rounded-full shadow-md m-2"></div>
        <div className="w-full bg-slate-300 h-10 rounded-full shadow-md m-4"></div>
        <div className="w-1/2 bg-slate-300 h-10 rounded-full shadow-md m-2"></div>
        <div className="w-3/4 bg-slate-300 h-10 rounded-full shadow-md m-3"></div>
      </div>
    </div>
  );

  const items = Array.from({ length: 10 }, (_, index) => <Item key={index} />);
  return items;
};

export default ListShimmer;
