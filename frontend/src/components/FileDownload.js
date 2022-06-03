import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from './utils/Downloader/useFileDownloader';
import './FileDownload.css'
import { Table } from 'semantic-ui-react'
function FileDownload({aadhar, files}) {
    const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>
      

      <div className="row">
        <div className="col text-center">
          <h2>These are Your Previous Records</h2>
          <div className="row mt-3">
            
            <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={10}>File Name</Table.HeaderCell>
                <Table.HeaderCell width='six'>Download Link</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
        
            <Table.Body>
            {files.map((file) => (
              <Table.Row>
                <Table.Cell>{file.name}</Table.Cell>
                <Table.Cell><a onMouseOver="color='#0F0'"
                              className=" hoverbtn btn-primary cursor-pointer text-white"
                              onClick={() => download(file)}
                            >
                          
Download

                            </a></Table.Cell>
              </Table.Row>
             ))}
            </Table.Body>
        
         
          </Table>
          
          </div>
          
        </div>
        {downloaderComponentUI}
      </div>
    </>
  )
}

export default FileDownload