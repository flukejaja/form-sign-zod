"use client";
import CardInformation from "./widget/CardInformation";

import InformationSignin from "./components/InformationSignin";

const SignInComponent = () => {
 

  return (
    <>
      <div className="py-5">
        <CardInformation>
          <InformationSignin />
        </CardInformation>
      </div>
    </>
  );
};
export default SignInComponent;
