import React from "react";
import woman from "../Components/Images/woman.jpg";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

function BenefitsCard() {
  return (
    <div className="flex flex-auto justify-around pt-7">
      <Card className="flex-row w-full max-w-[60rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img src={woman} alt="image" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue" className=" mb-4">
            Britam Presents;
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Secure your adventures with peace of mind - get travel insurance
            today!
          </Typography>
          <Typography color="gray" className="font-normal mb-8">
            At Britam, we prioritize your travel needs and are dedicated to
            providing comprehensive benefits that cater to your travel; cutting across all ages, preferences. Efficiently and <span className="font-bold">With you every step of the way!</span>
          </Typography>
          <a href="#" className="inline-block">
            {/* <Button variant="text" className="flex items-center gap-2">
              Learn More
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button> */}
          </a>
        </CardBody>
      </Card>
    </div>
  );
}

export default BenefitsCard;
