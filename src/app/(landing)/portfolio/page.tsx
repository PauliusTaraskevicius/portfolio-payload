import ProjectsReel from "./_components/projects-reel";

const PortfolioPage = () => {
  return (
    <div>
      {" "}
      <ProjectsReel
        query={{ sort: "desc", limit: 4 }}
        href="/portfolio?sort=recent"
        name="Brand new"
      />
    </div>
  );
};

export default PortfolioPage;
