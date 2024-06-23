import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Protagonist (ENFJ)</p>
        <p className="pb-2">
        Protagonist strive to have a positive impact on other people and the world around them. 
        These personalities rarely shy away from an opportunity to do the right thing, even when doing so is far from easy.
        </p>
        <div className="flex gap-1">
          <Badge>Extrovert</Badge>
          <Badge>OBSERVANT</Badge>
          <Badge>Planner</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
