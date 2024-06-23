import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/Pok13579/Scrum-Project-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Scrum-project
            </a>
          </li>
          
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
