import React from 'react'
import useFileDownloader from './utils/Downloader/useFileDownloader';
// import './FileDownload.css';

import { Button, TableCell, TableRow, } from "@mui/material";

function FileDownload({files}) {
  
  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  const download = (file) => downloadFile(file);
  return (
    <>
      { 
        files.map((file) => (
                <TableRow>
                <TableCell component='th' scope='row' style={{ fontSize: 16 }}></TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16 }}>{file.name}</TableCell>
                <TableCell component='th' scope='row' style={{ fontSize: 16 }}><Button style={{height: '40px',width:'140px',backgroundColor: '#2C88D9',color: '#fff',fontWeight :'600',fontSize: '16px'}} onClick={() => download(file)}>Download</Button></TableCell>
                </TableRow>
             ))}
        {downloaderComponentUI}
    </>
  )
}

export default FileDownload;