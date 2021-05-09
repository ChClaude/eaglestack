import React from 'react';

const Main = () => {
  return (
    <div className="overflow-hidden">
      <section className="mx-44 h-auto bg-yellow-700">
        <div className="flex justify-between  items-center mt-12">
          <div>
            <h1 className="mb-6 w-40-em leading-normal">
              <div>Modern</div>
              <div>web apps</div>
              <div>built faster</div>
            </h1>
            <p className="text-2xl w-80-em font-serif">
              An intuitive Git-based workflow and powerful serverless platform
              to build, deploy, and collaborate on web apps
            </p>
            <ul>
              <li>button</li>
              <li>text</li>
            </ul>
          </div>
          <div>
            <h2>Column</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
