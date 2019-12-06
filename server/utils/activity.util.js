const config = {
  activityConfig: {
    employeeLoginSuccess: {
      context: 'Employee',
      desc: 'Login Successfully',
      contextType: 'Login',
      key: '101'
    },
    employeeLoginFailure: {
      context: 'Employee',
      desc: 'Credentials not matched',
      contextType: 'LoginFail',
      key: '102'
    },
    employeeLogout: {
      context: 'Employee',
      desc: 'Employee logout successfully',
      contextType: 'Logout',
      key: '103'
    },
    employeeChangePassword: {
      context: 'Employee',
      desc: 'Employee password changed successfully',
      contextType: 'ChangePassword',
      key: '104'
    },
    employeeForgotPassword: {
      context: 'Employee',
      desc: 'Employee forgot password send email successfully',
      contextType: 'ForgotPassword',
      key: '105'
    },
    employeeLoginOTP: {
      context: 'Employee',
      desc: 'Login code sent successfully',
      contextType: 'EMPLOYEE',
      key: '106'
    },
    employeeVerifyOTP: {
      context: 'Employee',
      desc: 'Login matched successfully',
      contextType: 'EMPLOYEE',
      key: '107'
    },
    employeeCreate: {
      context: 'Employee',
      desc: 'Employee created',
      contextType: 'Create',
      key: '108'
    },
    employeeUpdate: {
      context: 'Employee',
      desc: 'Employee updated',
      contextType: 'Update',
      key: '109'
    },
    employeeDelete: {
      context: 'Employee',
      desc: 'Employee deleted',
      contextType: 'Delete',
      key: '110'
    },
    projectCreate: {
      context: 'Project',
      desc: 'Project created',
      contextType: 'Project created',
      key: '151'
    },
    projectUpdate: {
      context: 'Project',
      desc: 'Project updated',
      contextType: 'Project updated',
      key: '152'
    },
    projectDelete: {
      context: 'Project',
      desc: 'Project deleted',
      contextType: 'Project deleted',
      key: '153'
    },
    projectAttachmentCreate: {
      context: 'ProjectAttachment',
      desc: 'ProjectAttachment created',
      contextType: 'ProjectAttachment created',
      key: '201'
    },
    projectAttachmentUpdate: {
      context: 'ProjectAttachment',
      desc: 'ProjectAttachment updated',
      contextType: 'ProjectAttachment updated',
      key: '202'
    },
    projectAttachmentDelete: {
      context: 'ProjectAttachment',
      desc: 'ProjectAttachment deleted',
      contextType: 'ProjectAttachment deleted',
      key: '203'
    },
    employeeAttachmentCreate: {
      context: 'EmployeeAttachment',
      desc: 'EmployeeAttachmentCreate created',
      contextType: 'EmployeeAttachment created',
      key: '251'
    },
    employeeAttachmentUpdate: {
      context: 'EmployeeAttachment',
      desc: 'EmployeeAttachment updated',
      contextType: 'EmployeeAttachment updated',
      key: '252'
    },
    employeeAttachmentDelete: {
      context: 'EmployeeAttachment',
      desc: 'EmployeeAttachment deleted',
      contextType: 'EmployeeAttachmen deleted',
      key: '253'
    },
    employeeCommentCreate: {
      context: 'EmployeeComment',
      desc: 'EmployeeComment created',
      contextType: 'EmployeeComment created',
      key: '301'
    },
    employeeCommentUpdate: {
      context: 'EmployeeComment',
      desc: 'EmployeeComment updated',
      contextType: 'EmployeeComment updated',
      key: '302'
    },
    employeeCommentDelete: {
      context: 'EmployeeComment',
      desc: 'EmployeeComment deleted',
      contextType: 'EmployeeCommentCreate deleted',
      key: '303'
    },
    taskCreate: {
      context: 'Task',
      desc: 'Task created',
      contextType: 'Task created',
      key: '351'
    },
    taskUpdate: {
      context: 'Task',
      desc: 'Task updated',
      contextType: 'Task updated',
      key: '352'
    },
    taskDelete: {
      context: 'Task',
      desc: 'Task deleted',
      contextType: 'Task deleted',
      key: '353'
    },
    attendanceCreate: {
      context: 'Attendance',
      desc: 'Attendance created',
      contextType: 'Attendance created',
      key: '401'
    },
    attendanceUpdate: {
      context: 'Attendance',
      desc: 'Attendance updated',
      contextType: 'Attendance updated',
      key: '402'
    },
    attendanceDelete: {
      context: 'Attendance',
      desc: 'Attendance deleted',
      contextType: 'Attendance deleted',
      key: '403'
    },
    inventoryCreate: {
      context: 'Inventory',
      desc: 'Inventory created',
      contextType: 'Inventory created',
      key: '451'
    },
    inventoryUpdate: {
      context: 'Inventory',
      desc: 'Inventory updated',
      contextType: 'Inventory updated',
      key: '452'
    },
    inventoryDelete: {
      context: 'Inventory',
      desc: 'Inventory deleted',
      contextType: 'Inventory deleted',
      key: '453'
    },
    publicHolidaysCreate: {
      context: 'PublicHolidays',
      desc: 'PublicHolidays created',
      contextType: 'PublicHolidays created',
      key: '501'
    },
    publicHolidaysUpdate: {
      context: 'PublicHolidays',
      desc: 'PublicHolidays updated',
      contextType: 'PublicHolidays updated',
      key: '502'
    },
    publicHolidaysDelete: {
      context: 'PublicHolidays',
      desc: 'PublicHolidays deleted',
      contextType: 'PublicHolidays deleted',
      key: '503'
    },
    settingsCreate: {
      context: 'Settings',
      desc: 'Settings created',
      contextType: 'Settings created',
      key: '551'
    },
    settingsUpdate: {
      context: 'Settings',
      desc: 'Settings updated',
      contextType: 'Settings updated',
      key: '552'
    },
    settingsDelete: {
      context: 'Settings',
      desc: 'Settings deleted',
      contextType: 'Settings deleted',
      key: '553'
    },
    eventCreate: {
      context: 'Event',
      desc: 'Event created',
      contextType: 'Event created',
      key: '601'
    },
    eventUpdate: {
      context: 'Event',
      desc: 'Event updated',
      contextType: 'Event updated',
      key: '602'
    },
    eventDelete: {
      context: 'Event',
      desc: 'Event deleted',
      contextType: 'Event deleted',
      key: '603'
    },
    taskCommentCreate: {
      context: 'TaskComment',
      desc: 'TaskComment created',
      contextType: 'TaskComment created',
      key: '651'
    },
    taskCommentUpdate: {
      context: 'TaskComment',
      desc: 'TaskComment updated',
      contextType: 'TaskComment updated',
      key: '652'
    },
    taskCommentDelete: {
      context: 'TaskComment',
      desc: 'TaskComment deleted',
      contextType: 'TaskComment deleted',
      key: '653'
    },
    eventCommentCreate: {
      context: 'EventComment',
      desc: 'EventComment created',
      contextType: 'EventComment created',
      key: '701'
    },
    eventCommentUpdate: {
      context: 'EventComment',
      desc: 'EventComment updated',
      contextType: 'EventComment updated',
      key: '702'
    },
    eventCommentDelete: {
      context: 'EventComment',
      desc: 'EventComment deleted',
      contextType: 'EventComment deleted',
      key: '703'
    },
    eventAttachmentCreate: {
      context: 'EventAttachment',
      desc: 'EventAttachment created',
      contextType: 'EventAttachment created',
      key: '751'
    },
    eventAttachmentUpdate: {
      context: 'EventAttachment',
      desc: 'EventAttachment updated',
      contextType: 'EventAttachment updated',
      key: '752'
    },
    eventAttachmentDelete: {
      context: 'EventAttachment',
      desc: 'EventAttachment deleted',
      contextType: 'EventAttachment deleted',
      key: '753'
    },
    taskAttachmentCreate: {
      context: 'TaskAttachment',
      desc: 'TaskAttachment created',
      contextType: 'TaskAttachment created',
      key: '801'
    },
    taskAttachmentUpdate: {
      context: 'TaskAttachment',
      desc: 'TaskAttachment updated',
      contextType: 'TaskAttachment updated',
      key: '802'
    },
    taskAttachmentDelete: {
      context: 'TaskAttachment',
      desc: 'TaskAttachment deleted',
      contextType: 'TaskAttachment deleted',
      key: '803'
    },
    leaveCreate: {
      context: 'Leave',
      desc: 'Leave created',
      contextType: 'Leave created',
      key: '851'
    },
    leaveUpdate: {
      context: 'Leave',
      desc: 'Leave updated',
      contextType: 'Leave updated',
      key: '852'
    },
    leaveDelete: {
      context: 'Leave',
      desc: 'Leave deleted',
      contextType: 'Leave deleted',
      key: '853'
    },
    companyCreate: {
      context: 'Company',
      desc: 'Company created',
      contextType: 'Company created',
      key: '901'
    },
    companyUpdate: {
      context: 'Company',
      desc: 'Company updated',
      contextType: 'Company updated',
      key: '902'
    },
    companyDelete: {
      context: 'Company',
      desc: 'Company deleted',
      contextType: 'Company deleted',
      key: '903'
    },
    templateCreate: {
      context: 'Template',
      desc: 'Template created',
      contextType: 'Template created',
      key: '951'
    },
    templateUpdate: {
      context: 'Template',
      desc: 'Template updated',
      contextType: 'Template updated',
      key: '952'
    },
    templateDelete: {
      context: 'Template',
      desc: 'Template deleted',
      contextType: 'Template deleted',
      key: '953'
    },
    taskUpload: {
      context: 'Task',
      desc: 'Task uploaded',
      contextType: 'Task uploded',
      key: '1001'
    },
    taskNotUploaded: {
      context: 'Task',
      desc: 'Task not uploaded',
      contextType: 'Task upload failed',
      key: '1002'
    },
    companyUpload: {
      context: 'Company',
      desc: 'Company upload',
      contextType: 'Compnay uploded',
      key: '1003'
    },
    eventUpload: {
      context: 'Attachement',
      desc: 'Attachement uploaded',
      contextType: 'Attachement uploded',
      key: '1051'
    },
    CSVFileUpload: {
      context: 'Csv',
      desc: 'CSV uploded',
      contextType: 'CSV uploded',
      key: '1052'
    },
    employeeUpload: {
      context: 'Employee',
      desc: 'Employee uploded',
      contextType: 'Employee uploded',
      key: '1053'
    },
    menulistCreate: {
      context: 'menulist',
      desc: 'Menu created',
      contextType: 'Menu created',
      key: '1101'
    },
    menulistUpdate: {
      context: 'menulist',
      desc: 'Menu updated',
      contextType: 'Menu updated',
      key: '1151'
    },
    menulistDelete: {
      context: 'menulist',
      desc: 'Menu deleted',
      contextType: 'Menu deleted',
      key: '1201'
    },
    menulistUpload: {
      context: 'menulist',
      desc: 'Menu uploaded',
      contextType: 'Menu uploaded',
      key: '1201'
    }
  }
}
export default config;





