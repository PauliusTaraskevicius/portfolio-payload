type Props = {
  params: {
    portfolioId: string;
  };
};

const PortfolioIdPage = ({ params }: Props) => {
  const { portfolioId } = params;

  return <div>PortfolioIdPage</div>;
};

export default PortfolioIdPage;
