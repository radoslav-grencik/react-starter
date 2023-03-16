const Show: React.FC<
  React.PropsWithChildren<{
    when: boolean;
    fallback?: React.ReactNode;
  }>
> = ({ children, when, fallback }) => {
  if (!when) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default Show;
