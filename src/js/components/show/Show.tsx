const Show: React.FC<
  React.PropsWithChildren<{
    when: boolean;
  }>
> = ({ children, when }) => {
  if (!when) {
    return null;
  }

  return <>{children}</>;
};

export default Show;
