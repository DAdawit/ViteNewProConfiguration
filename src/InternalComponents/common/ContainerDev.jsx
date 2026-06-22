const ContainerDiv = ({ children, className }) => {
  return (
    <div className={`${className} w-full custom-p-20 card rounded-[10px]`}>
      {children}
    </div>
  );
};

export default ContainerDiv;
