import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from './utils/Downloader/useFileDownloader';
import './FileDownload.css'
import { Table } from 'semantic-ui-react';

function FileDownload({aadhar, files}) {
const [downloadFile, downloaderComponentUI] = useFileDownloader();
const download = (file) => downloadFile(file);
const myStyle = {
  width: '67rem',
  backgroundColor: 'white'
}

  return (
    <>
           {files.map((file) => (
              <Table.Row>
                <Table.Cell>{file.name}</Table.Cell>
                <Table.Cell><a className="btn btn-primary" onClick={() => download(file)} >Download</a></Table.Cell>
              </Table.Row>
             ))}
    </>
)}

export default FileDownload;