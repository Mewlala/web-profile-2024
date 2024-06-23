import React from "react";
import Card from "./common/Card";

type Props = {};

const Goals = (props: Props) => {
  return (
    <Card title="Goals">
      <div>
        <ul className="list-inside list-disc">
          <li>I get to work that I like.</li>
          <li>Learn a new coding skill</li>
          <li>Develop language skills</li>
          <li>Read 1000 novels</li>
        </ul>
      </div>
    </Card>
  );
};

export default Goals;
