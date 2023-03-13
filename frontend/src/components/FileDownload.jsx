import React from 'react'
import useFileDownloader from './utils/Downloader/useFileDownloader';
import './FileDownload.css'
import { Table } from 'semantic-ui-react'

function FileDownload({files}) {
  
  const [downloadFile, downloaderComponentUI] = useFileDownloader();
  const download = (file) => downloadFile(file);

  return (
    <>
      {files.map((file) => (
              <Table.Row>
                <Table.Cell><h3>{file.name}</h3></Table.Cell>
                <Table.Cell>
                <button className="btn btn-outline-primary" onClick={() => download(file)} >Download</button></Table.Cell>
              </Table.Row>
             ))}
        {downloaderComponentUI}
    </>
  )
}

export default FileDownload;