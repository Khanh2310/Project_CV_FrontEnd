export const ALL_PERMISSIONS = {
  COMPANIES: {
    GET_PAGINATE: {
      method: 'GET',
      apiPath: '/v1/api/companies',
      module: 'COMPANIES',
    },
    CREATE: {
      method: 'POST',
      apiPath: '/v1/api/companies',
      module: 'COMPANIES',
    },
    UPDATE: {
      method: 'PATCH',
      apiPath: '/v1/api/companies/:id',
      module: 'COMPANIES',
    },
    DELETE: {
      method: 'DELETE',
      apiPath: '/v1/api/companies/:id',
      module: 'COMPANIES',
    },
  },
  JOBS: {
    GET_PAGINATE: { method: 'GET', apiPath: '/v1/api/jobs', module: 'JOBS' },
    CREATE: { method: 'POST', apiPath: '/v1/api/jobs', module: 'JOBS' },
    UPDATE: { method: 'PATCH', apiPath: '/v1/api/jobs/:id', module: 'JOBS' },
    DELETE: { method: 'DELETE', apiPath: '/v1/api/jobs/:id', module: 'JOBS' },
  },
  PERMISSIONS: {
    GET_PAGINATE: {
      method: 'GET',
      apiPath: '/v1/api/permissions',
      module: 'PERMISSIONS',
    },
    CREATE: {
      method: 'POST',
      apiPath: '/v1/api/permissions',
      module: 'PERMISSIONS',
    },
    UPDATE: {
      method: 'PATCH',
      apiPath: '/v1/api/permissions/:id',
      module: 'PERMISSIONS',
    },
    DELETE: {
      method: 'DELETE',
      apiPath: '/v1/api/permissions/:id',
      module: 'PERMISSIONS',
    },
  },
  RESUMES: {
    GET_PAGINATE: {
      method: 'GET',
      apiPath: '/v1/api/resumes',
      module: 'RESUMES',
    },
    CREATE: { method: 'POST', apiPath: '/v1/api/resumes', module: 'RESUMES' },
    UPDATE: {
      method: 'PATCH',
      apiPath: '/v1/api/resumes/:id',
      module: 'RESUMES',
    },
    DELETE: {
      method: 'DELETE',
      apiPath: '/v1/api/resumes/:id',
      module: 'RESUMES',
    },
  },
  ROLES: {
    GET_PAGINATE: { method: 'GET', apiPath: '/v1/api/roles', module: 'ROLES' },
    CREATE: { method: 'POST', apiPath: '/v1/api/roles', module: 'ROLES' },
    UPDATE: { method: 'PATCH', apiPath: '/v1/api/roles/:id', module: 'ROLES' },
    DELETE: { method: 'DELETE', apiPath: '/v1/api/roles/:id', module: 'ROLES' },
  },
  USERS: {
    GET_PAGINATE: { method: 'GET', apiPath: '/v1/api/users', module: 'USERS' },
    CREATE: { method: 'POST', apiPath: '/v1/api/users', module: 'USERS' },
    UPDATE: { method: 'PATCH', apiPath: '/v1/api/users/:id', module: 'USERS' },
    DELETE: { method: 'DELETE', apiPath: '/v1/api/users/:id', module: 'USERS' },
  },
};

export const ALL_MODULES = {
  AUTH: 'AUTH',
  COMPANIES: 'COMPANIES',
  FILES: 'FILES',
  JOBS: 'JOBS',
  PERMISSIONS: 'PERMISSIONS',
  RESUMES: 'RESUMES',
  ROLES: 'ROLES',
  USERS: 'USERS',
  SUBSCRIBERS: 'SUBSCRIBERS',
};
