import React, {memo, useCallback, useEffect, useRef, useState} from 'react';
import FullscreenModal from '../..';
// import {TextArea, TextInput, DragAndDrop} from '@/_components';
// import {formatMilliseconds, toFormData} from '@/_helpers';
// import {useDispatch, useSelector} from 'react-redux';
// import {moduleConstants} from '@/_constants';
// import Select from 'react-dropdown-select';
// import {appActions, facultyActions, modulesActions} from '@/_actions';
// import {AppEmitter} from '@/_controllers';
// // import FullscreenModal from '../..';
// import classNames from 'classnames';
// import Formsy from 'formsy-react';
// import {format} from 'date-fns';
// import axios from 'axios';
// import DragAndDrop from '@/_components/DragAndDrop';

// import FileIcon from '../../../../../public/_assets/icons/file.svg';
// import FullscreenModal from '../..';

// const contentTypes = [
//    {id: 1, title: 'Video'},
//    {id: 2, title: 'Audio'},
//    {id: 3, title: 'PDF'},
//    {id: 4, title: 'WordDocument'},
// ];

// const getContentType = (key) => {
//    switch (key) {
//       case 1:
//          return true;
//       case 2:
//          return true;
//       default:
//          return false;
//    }
// };

// const getType = (key) => {
//    switch (key) {
//       case 1:
//          return ['video/mp4', 'video/avi', 'video/wmv', 'video/webm', 'video/mkv'];
//       case 2:
//          return ['audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/wma', 'audio/ogg', 'audio/aac'];
//       case 3:
//          return ['application/pdf'];
//       case 4:
//          return ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/docx', 'application/doc', 'application/txt'];
//       default:
//          return [];
//    }
// };

// eslint-disable-next-line react/display-name
const ModuleContent = memo((props) => {
   const [open, setOpen] = useState(false);
   // const forEdit = props?.type === 'edit';
   // const dispatch = useDispatch();
   // const {bio} = useSelector((s) => s.user);
   // const {facultiesList} = useSelector((s) => s.faculty);
   // const {
   //    IsCreatingContents,
   //    creatingContentSuccess,
   //    creatingModuleSuccess,
   //    IsCreatingModulesContents,
   //    IsUpdatingModulesContents,
   //    updatingModulesContentSuccess,
   //    creatingModulesContentSuccess,
   //    updatingModuleSuccess,
   // } = useSelector((s) => s.module);

   // const input = useRef();
   // const [files, setFiles] = useState();
   // const [fileData, setFileData] = useState();
   // const [dragError, setDragError] = useState('');
   // const [fileTitle, setFileTitle] = useState('');
   // const [dragging, setDragging] = useState(false);
   // const [duration, setDuration] = useState('0.00');
   // const [isUploading, setIsUploading] = useState(false);
   // const [uploadedModuleContent, setUploadedModuleContent] = useState(null);
   // const [contentType, setContentType] = useState(props?.data?.content?.type);
   // const faculty = facultiesList?.find((obj) => obj.id === props?.data?.faculty_id);

   // const validFileType = getType(contentType);
   // const validContentTypes = (file, setState) => {
   //    if (!validFileType.includes(file?.type)) {
   //       setState(`Selected file is not a valid file type, please choose a valid type of ${validFileType}`);
   //       return false;
   //    } else {
   //       setState('');
   //       return true;
   //    }
   // };
   // const contentTypeArr = contentTypes?.map((v) => ({
   //    ...v,
   //    label: v.title,
   //    value: v.id,
   // }));

   // useEffect(() => {
   //    dispatch(facultyActions.getFaculties());
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, []);
   const setOpenState = useCallback(
      (v) => {
         setOpen(v);
         typeof props?.dropState === 'function' && props?.dropState(v);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [props.dropState],
   );
   // const handleDrop = (files) => {
   //    // console.log('file: ModuleContent.js:87  files=====>', files);

   //    if (validContentTypes(files[0], setDragError)) {
   //       const track = new Audio(URL.createObjectURL(files[0]));
   //       track.onloadedmetadata = () => {
   //          const formattedDuration = formatMilliseconds(track.duration);
   //          setDuration(formattedDuration);
   //       };
   //       setFileTitle(files[0]?.name);
   //       setFiles(URL.createObjectURL(files[0]));
   //       setFileData(files[0]);
   //       setDragError('');
   //    } else {
   //       setDragError(`Selected file is not a valid file type, please choose a valid type of ${validFileType}`);
   //    }
   // };
   // const handleChange = () => {
   //    const files = input.current.files;
   //    // console.log('file: ModuleContent.js:110  files=====>', files);

   //    if (files.length) {
   //       if (validContentTypes(files[0], setDragError)) {
   //          const track = new Audio(URL.createObjectURL(files[0]));
   //          track.onloadedmetadata = () => {
   //             const formattedDuration = formatMilliseconds(track.duration);
   //             setDuration(formattedDuration);
   //          };
   //          setFileTitle(files[0]?.name);
   //          setFiles(URL.createObjectURL(files[0]));
   //          setFileData(files[0]);
   //          setDragError('');
   //       } else {
   //          setDragError(`Selected file is not a valid file type, please choose a valid type of ${validFileType}`);
   //       }
   //    }
   // };

   // const handleSubmit = useCallback(
   //    async (data) => {
   //       data.module_id = props?.data?.module?.id;
   //       props?.data?.content?.uuid && (data.uuid = props?.data?.content?.uuid);
   //       const fData = toFormData(data);

   //       if (contentType) {
   //          fData.append('type', contentType);
   //       }
   //       if (fileData) {
   //          fData.append('content_uri', fileData);
   //       }

   //       // console.log('file: ModuleContent index.js:141  model=====>', fData);
   //       dispatch(modulesActions[props?.data?.content?.uuid ? 'updateModuleContent' : 'createModuleContent']({fields: fData}));
   //    },
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   //    [contentType, fileData, props?.data?.content?.uuid, props?.data?.module?.id],
   // );

   // const handleSubmit = useCallback(
   //    async (data) => {
   //       data.module_id = props?.data?.module?.id;
   //       props?.data?.content?.uuid && (data.uuid = props?.data?.content?.uuid);

   //       const fData = new FormData();
   //       fData.append('title', data.title);
   //       fData.append('description', data.description);
   //       fData.append('module_id', props?.data?.module?.id);

   //       const fData2 = toFormData(data);
   //       fData2.append('module_id', props?.data?.module?.id);

   //       if (contentType) {
   //          fData.append('type', contentType);
   //          fData2.append('type', contentType);
   //       }
   //       if (fileData) {
   //          fData.append('media', fileData);
   //          fData2.append('content_uri', fileData);
   //          // fData.append('content_uri', fileData);
   //       }
   //       // console.log('file: index.js:176  fData=====>', fData);
   //       // console.log('file: index.js:176  fData2=====>', fData2);

   //       if (forEdit) {
   //          dispatch(modulesActions.updateModuleContent({fields: fData2}));
   //       } else if (contentType === 3 || contentType === 4) {
   //          dispatch(modulesActions.createModuleContent({fields: fData2}));
   //       } else {
   //          dispatch(modulesActions.createContent({fields: fData}));
   //       }
   //    },
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   //    [contentType, fileData, props?.data?.content?.uuid, props?.data?.module?.id],
   // );

   const handleClickOutside = useCallback(() => {
      // setFiles(null);
      // setDragError('');
      // setContentType();
      // setFileData(null);
      // appActions.clearMessages();
      setOpenState(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // useEffect(() => {
   //    const listener = AppEmitter.addListener(
   //       moduleConstants.DELETE_MODULE_CONTENT_SUCCESS || moduleConstants.UPDATE_MODULE_CONTENT_SUCCESS || moduleConstants.CREATE_MODULE_CONTENT_SUCCESS,
   //       (event) => {
   //          console.log('DELETE_MODULE_CONTENT_SUCCESS || CREATE_MODULE_CONTENT_SUCCESS || UPDATE_MODULE_CONTENT_SUCCESS _detail', event.detail);
   //          handleClickOutside();
   //       },
   //    );

   //    return () => listener.remove();
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, []);

   // useEffect(() => {
   //    if (creatingContentSuccess) {
   //       handleClickOutside();
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [creatingContentSuccess]);

   // useEffect(() => {
   //    if (creatingModulesContentSuccess) {
   //       handleClickOutside();
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [creatingModulesContentSuccess]);

   // useEffect(() => {
   //    if (updatingModulesContentSuccess) {
   //       handleClickOutside();
   //    }
   //    // eslint-disable-next-line react-hooks/exhaustive-deps
   // }, [updatingModulesContentSuccess]);

   return (
      <>
         <button onClick={() => setOpenState(true)} title={props?.tooltip} data-toggle="tooltip" data-placement="top" className={props.className}>
            {props.children}
         </button>
         <FullscreenModal open={open} className="d-flex" onClickAway={handleClickOutside}>
            <div className="course-content p-md-5 p-4">
               content here...
               {/* <Formsy onValidSubmit={handleSubmit} className="assess">
                  <h4 className="pb-4 mb-2 text-capitalize fw-bold">{forEdit ? 'Edit Module Content' : 'Upload Module Content'}</h4>
                  <TextInput
                     name="faculty_name"
                     type="text"
                     label="Faculty name"
                     value={faculty?.name}
                     placeholder="Faculty name"
                     className="aput mb-4"
                     useFocusedError
                     required
                     disabled
                  />
                  <TextInput
                     name="course_title"
                     type="text"
                     label="Course title"
                     value={props?.data?.name}
                     placeholder="Course Title"
                     className="aput mb-4"
                     useFocusedError
                     required
                     disabled
                  />
                  <TextInput
                     name="module_title"
                     type="text"
                     label="Module Title"
                     value={props?.data?.module?.title}
                     // placeholder="Module Title"
                     className="aput mb-4"
                     useFocusedError
                     required
                     disabled
                  />
                  <TextInput
                     name="title"
                     type="text"
                     label="Content Title"
                     value={props?.data?.content?.title}
                     className="aput mb-4"
                     useFocusedError
                     autoFocus
                     required
                  />
                  <TextArea
                     name="description"
                     type="text"
                     value={props?.data?.content?.description}
                     label="Content Description"
                     placeholder="Description should not be more than 255 characters"
                     className="atext mb-4"
                     required
                  />
                  <div className="">
                     <Select
                        className="alet w-100 mb-4 p-0"
                        placeholder="Select file type"
                        values={forEdit ? [contentTypeArr?.find((obj) => obj.value === props?.data?.content?.type)] : undefined}
                        options={contentTypeArr}
                        onChange={(values) => setContentType(values?.[0]?.value)}
                        required
                        // loading={IsRequestingFaculties}
                     />
                  </div>
                  <div className="details p-3 mb-4">
                     <DragAndDrop
                        handleDrop={handleDrop}
                        setDragging={setDragging}
                        className="pdf-wrapper w-100 d-flex align-items-center justify-content-center">
                        {files?.length || props?.data?.content?.content_uri ? (
                           <div
                              onClick={() => input.current?.click()}
                              className={classNames('h-100 w-100 text-center d-flex flex-column justify-content-center align-items-center', {
                                 dragging,
                              })}>
                              <FileIcon style={{scale: '.7'}} />
                              <p
                                 className="text-truncate w-100"
                                 title={fileTitle || 'uploaded file is here, click to change'}
                                 data-toggle="tooltip"
                                 data-placement="top">
                                 {fileTitle || 'uploaded file is here, click to change'}
                              </p>
                           </div>
                        ) : (
                           <div
                              onClick={() => input.current?.click()}
                              className={classNames('h-100 w-100 text-center d-flex flex-column justify-content-center align-items-center', {
                                 dragging,
                              })}>
                              {dragging ? (
                                 "You're in, drop it now!"
                              ) : (
                                 <p className="text-center">
                                    Drag & Drop <span className="fw-bold">contents</span> here, or <span className="fw-bold">Browse</span> (optional)
                                 </p>
                              )}
                           </div>
                        )}
                        <input
                           ref={input}
                           onClick={(e) => (input.current.value = null)}
                           onChange={handleChange}
                           // multiple
                           type="file"
                           accept={getType(contentType)}
                           className=""
                           style={{display: 'none'}}
                        />
                     </DragAndDrop>
                  </div>
                  {!!dragError?.length && <p className="error pb-4">{dragError}</p>}
                  {getContentType(contentType || props?.data?.content?.type) && (
                     <TextInput
                        name="duration"
                        type="text"
                        label="Content Duration"
                        value={props?.data?.content?.duration || duration}
                        className="aput mb-4"
                        useFocusedError
                        required
                        disabled
                     />
                  )}
                  <button type="submit" className="submit py-4 mt-4 w-100">
                     {IsCreatingContents || IsCreatingModulesContents || IsUpdatingModulesContents ? (
                        <i className="fa fa-spinner fa-spin"></i>
                     ) : (
                        'Submit'
                     )}
                  </button>
               </Formsy> */}
            </div>
         </FullscreenModal>
      </>
   );
});

export default ModuleContent;

// set bodyparser
export const config = {
   api: {
      bodyParser: false,
   },
};
