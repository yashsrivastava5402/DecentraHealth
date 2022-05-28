import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from './utils/Downloader/useFileDownloader';
import './FileDownload.css'
import { Table } from 'semantic-ui-react'
// const files = [
//     {
//       name: "Photo 1",
//       thumb:
//         "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=427&q=80 427w",
//       file:
//         "https://images.unsplash.com/photo-1604263439201-171fb8c0fddc?rnd=" +
//         Math.random(),
//       filename: "photo-1.jpg",
//     },
//     {
//       name: "Photo 2",
//       thumb:
//         "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=80 401w",
//       file:
//         "https://images.unsplash.com/photo-1604164388977-1b6250ef26f3?rnd=" +
//         Math.random(),
//       filename: "photo-2.jpg",
//     },
//     {
//       name: "Photo 3",
//       thumb:
//         "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80 750w",
//       file:
//         "https://images.unsplash.com/photo-1604264849633-67b1ea2ce0a4?rnd=" +
//         Math.random(),
//       filename: "photo-3.jpg",
//     }
//     // },
//     // {
//     //   name: "PJOJO",
//     //   filename: 'WhatsApp Image 2022-04-16 at 3.17.36 PM.png',
//     //   file: blobUrl,
//     //   size: 196499,
//     //   encoding: '7bit',
//     //   tempFilePath: '',
//     //   truncated: false,
//     //   mimetype: 'image/jpeg',
//     //   md5: '1bb3c31307e401e9b0edda71adbb4670'
//     // }
//   ];
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
                <Table.Cell><a
                              className="btn btn-primary cursor-pointer text-white"
                              onClick={() => download(file)}
                            >
                           <button class="bg-sky-600 hover:bg-sky-700 ...">
Download
</button>
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