import React from "react";
import { Button, NoShadowButton } from "../UI/Button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between gap-y-10">
      <h1 className="text-3xl font-normal mb-4 ">Buttons</h1>

      {/* <Button /> */}
      <div className="flex w-[380px] justify-between ">
        {/* <Button />  1 */}
        <Button heading="&lt;Button /&gt;" style="bg-[#E0E0E0]" />

        {/* <Button />  2 */}
        <Button
          heading="&:hover, &:focus"
          style="bg-[#E0E0E0] hover:bg-[#AEAEAE]"
        />
      </div>
      {/* <Button /> end */}

      {/* <Button variant="outline" /> */}
      <div className="flex w-[380px] justify-between">
        {/* <Button variant="outline" /> 1 */}
        <NoShadowButton
          heading='&lt;Button variant="outline" /&gt;'
          style="border-[#3D5AFE] text-[#3D5AFE]"
        />

        {/* <Button variant="outline" /> hover */}
        <NoShadowButton
          heading="&:hover, &:focus"
          style="border-[#3D5AFE] text-[#3D5AFE] hover:bg-[#2962ff1a]"
        />
      </div>

      {/* <Button variant="outline" /> end */}

      {/* <Button variant="text" /> */}
      <div className="flex w-[380px] justify-between ">
        {/* <Button variant="text" /> 1 */}
        <NoShadowButton
          heading='&lt;Button variant="text" /&gt;'
          style="text-[#3D5AFE] border-none"
        />

        {/* <Button variant="text" /> hover */}
        <NoShadowButton
          heading="&:hover, &:focus"
          style="text-[#3D5AFE] border-none hover:bg-[#2962ff1a]"
        />
      </div>

      {/* <Button variant="text" /> end */}

      {/* <Button variant="disableshadow" /> */}
      <NoShadowButton
        heading='&lt;Button variant="disableshadow" /&gt;'
        style="bg-[#3D5AFE] text-white border-none"
      />
      {/* <Button variant="disableshadow" /> end */}

      {/* <Button disabled /> */}
      <div className="flex w-[500px] justify-between ">
        {/* <Button disabled /> 1 */}
        <NoShadowButton
          heading="&lt;Button disabled /&gt;"
          style="disabled:text-[#9e9e9e] disabled:bg-[#E0E0E0]"
          disabled="disabled"
        />
        {/* <Button disabled /> 2 */}
        <NoShadowButton
          heading='&lt;Button variant="text" disabled /&gt;'
          style="disabled:text-[#9E9E9E] disabled:border-none"
          disabled="disabled"
        />
      </div>
      {/* <Button disabled /> end */}

      {/* button with icon */}
      <div className="flex w-[700px] justify-between ">
        {/* <Button startIcon=”local_grocery_store” /> */}
        <Button
          heading='&lt;Button startIcon="local_grocery_store" /&gt;'
          style="bg-[#3D5AFE] text-white"
          leftIcon={<i className="fa fa-cart-plus mr-3" aria-hidden="true"></i>}
        />

        {/* <Button endIcon=”local_grocery_store" /> */}
        <Button
          heading='&lt;Button endIcon="local_grocery_store" /&gt;'
          style="bg-[#3D5AFE] text-white"
          rightIcon={
            <i className="fa fa-cart-plus ml-3" aria-hidden="true"></i>
          }
        />
      </div>
      {/* button with icon end*/}

      {/* <Button size/> */}
      <div className="flex w-[80vh] justify-between ">
        {/* <Button size="sm" /> */}
        <Button
          heading='&lt;Button size="sm" /&gt;'
          style="bg-[#3D5AFE] text-white"
        />
        {/* <Button size="md" /> */}
        <Button
          heading='&lt;Button size="md" /&gt;'
          style="bg-[#3D5AFE] text-white py-3"
        />
        {/* <Button size="lg" /> */}
        <Button
          heading='&lt;Button size="lg" /&gt;'
          style="bg-[#3D5AFE] text-white py-4 px-7"
        />
      </div>
      {/* <Button size/> end */}

      {/* <Button color /> */}
      <div className="flex w-[1000px] justify-between ">
        {/* <Button color="default" /> */}
        <Button
          heading='&lt;Button color="default" /&gt;'
          style="bg-[#E0E0E0]"
        />
        {/* <Button color="primary" /> */}
        <Button
          heading='&lt;Button color="primary" /&gt;'
          style="bg-[#3D5AFE] text-white"
        />
        {/* <Button color="secondary" /> */}
        <Button
          heading='&lt;Button color="secondary" /&gt;'
          style="bg-[#455A64] text-white"
        />
        {/* <Button color="danger" /> */}
        <Button
          heading='&lt;Button color="danger" /&gt;'
          style="bg-[#D32F2F] text-white"
        />
      </div>
      {/* <Button color end /> */}

      {/* <Button color /> &:hover, &:focus */}
      <div className="flex w-[1000px] justify-between ">
        {/* <Button color="default" /> */}
        <Button
          heading='&lt;Button color="default" /&gt;'
          style="bg-[#E0E0E0] hover:bg-[#AEAEAE] hover:text-[#3F3F3F]"
        />
        {/* <Button color="primary" /> */}
        <Button
          heading='&lt;Button color="primary" /&gt;'
          style="bg-[#3D5AFE] text-white hover:bg-[#0039CB]"
        />
        {/* <Button color="secondary" /> */}
        <Button
          heading='&lt;Button color="secondary" /&gt;'
          style="bg-[#455A64] text-white hover:bg-[#1C313A]"
        />
        {/* <Button color="danger" /> */}
        <Button
          heading='&lt;Button color="danger" /&gt;'
          style="bg-[#D32F2F] text-white hover:bg-[#9A0007]"
        />
      </div>
      {/* <Button color /> &:hover, &:focus end */}
    </div>
  );
};

export default Hero;
