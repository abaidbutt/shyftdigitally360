const layoutWrap = ({ children }) => {
  return <>{children}</>;
};
export const wrapLayout = (page) => <layoutWrap>{page}</layoutWrap>;
export default layoutWrap;
