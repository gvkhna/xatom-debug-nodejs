'use babel';

export const Runtype = {
  CurrentFile: 'Current File',
  Script: 'Script',
  Remote: 'Remote'
}

export const NodeOptions = {
  runType: {
    type: 'string',
    title: 'Run Type',
    default: Runtype.CurrentFile,
    enum: Object.keys(Runtype).map((k) => Runtype[k])
  },
  binaryPath: {
    type: 'string',
    title: 'Binary Path',
    default: '/usr/bin/local/node',
    visible: {
      runType: {
        contains: [Runtype.Script, Runtype.CurrentFile]
      }
    }
  },
  port: {
    type: 'number',
    title: 'Port Number',
    default: 5858,
    visible: {
      runType: {
        contains: [Runtype.Script, Runtype.CurrentFile]
      }
    }
  },
  scriptPath: {
    type: 'string',
    title: 'Source Script',
    default: 'Current File',
    visible: {
      runType: {
        contains: [Runtype.Script]
      }
    }
  },
  remoteUrl: {
    type: 'string',
    title: 'Remote Url',
    default: 'localhost',
    visible: {
      runType: {
        contains: [Runtype.Remote]
      }
    }
  },
  remotePort: {
    type: 'number',
    title: 'Remote Port',
    default: 5858,
    visible: {
      runType: {
        contains: [Runtype.Remote]
      }
    }
  },
  environmentVariables: {
    type: 'object',
    title: 'Environment Variables',
    default: {},
    visible: {
      runType: {
        contains: [Runtype.Script, Runtype.CurrentFile]
      }
    }
  },
  launchArguments: {
    type: 'array',
    title: 'Launch Arguments',
    default: [],
    visible: {
      runType: {
        contains: [Runtype.Script, Runtype.CurrentFile]
      }
    }
  }
}
