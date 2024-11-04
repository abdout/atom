import Button from "@/component/nextatom/button";
import Icon from "@/component/nextatom/icon";
import Image from "@/component/nextatom/image";
import Input from "@/component/nextatom/input";
import Radio from "@/component/nextatom/radio";
import Progressbar from "@/component/molecule/Progressbar";
import Accordion from "@/component/molecule/accordion";
import Breadcrumb from "@/component/molecule/breadcrumb";
import Combobox from "@/component/molecule/combobox";
import Navbar from "@/component/molecule/navbar";
import Sidebar from "@/component/molecule/sidebar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 pt-7">
      <Button label="Join" />
      <Input />
      <Icon />
      <Image />
      <Radio />
      <Navbar />
      <Sidebar />
      <Progressbar />
      <Breadcrumb />
      <Accordion  />
      <Combobox />
    </div>
  );
}
