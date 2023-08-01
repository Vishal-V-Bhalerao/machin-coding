import * as React from "react";
import { useAppSelector } from "../state/hooks";
const FileExplorer: React.FC = () => {
  const rootDir = useAppSelector((state) => state.fileExplorer.nodes);
  return <div> {rootDir[0].name} </div>;
};

export default FileExplorer;
