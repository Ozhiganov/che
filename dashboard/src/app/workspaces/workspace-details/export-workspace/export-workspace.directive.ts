/*
 * Copyright (c) 2015-2017 Codenvy, S.A.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *   Codenvy, S.A. - initial API and implementation
 */
'use strict';

/**
 * @ngdoc directive
 * @name workspaces.details.directive:workspaceDetailsProjects
 * @restrict E
 * @element
 *
 * @description
 * <export-workspace workspace-id="workspaceID" workspace-details="workspaceDetails"></export-workspace>
 *
 * @usage
 *   <export-workspace workspace-id="workspaceID" workspace-details="workspaceDetails"></export-workspace>
 *
 * @author Florent Benoit
 */
export class ExportWorkspace {

  /**
   * Default constructor that is using resource
   * @ngInject for Dependency injection
   */
  constructor () {
    this.restrict = 'E';
    this.templateUrl = 'app/workspaces/workspace-details/export-workspace/export-workspace.html';

    this.controller = 'ExportWorkspaceController';
    this.controllerAs = 'exportWorkspaceCtrl';
    this.bindToController = true;

    // scope values
    this.scope = {
      workspaceId: '@workspaceId',
      workspaceDetails: '=workspaceDetails',
      workspaceExportDisabled: '='
    };
  }

}
