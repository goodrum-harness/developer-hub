---
title: Manage access control for CCM Perspectives 
description: This topic describes how to add and manage access control for CCM Perspectives folder.
# sidebar_position: 2
---

You can now manage access to Perspective folders by assigning Resource Groups to users bound by the roles assigned to them.

The following steps illustrate how to restrict access to a Resource Group:



1. In **Harness**, go to** Account Settings**.
2. Select **Access Control**.
3. Select **Roles**.
4. Click **+ New Role** to create a custom role with the following permissions. For example, CCM Custom Role. 
   
     ![](./static/create-new-role.png)
     
     
     ![](./static/custom-role-permissions-1.png)


5. Create another custom role with a different set of permissions. 
   
      ![](./static/custom-role-permissions-2.png)

6. Select **Resource Groups**.
7. Click **+ New Resource Group** to create a new resource group.

    ![](./static/create-new-resource-group.png)

8.  Select **Account only** in the **Resource Scope** dropdown list.
9.  In the **Resources** pane, select **Cloud Cost management** > **Folders**. 
    
      ![](./static/select-resources.png)
	
10.  To restrict access to specific folders, select **Specified** and then click **Add**. 
    
      ![](./static/add-folders.png)

11. Add the selected folders and save the resource group settings.
12. To bind the **Role** with the **Resource Group**, go to the **Users** tab on the **Access Control** page.
13. Select the user you want to restrict access to.
14. Click **Manage Roles**. 
15. Click **Add** in the **Manage Role Bindings** window.
16. Select the **Role** and the newly created **Resource Group** to restrict access to folders.
17. Select another **Role** and **Resource Group** to provide access to all other resources.
18. Click **Apply**. 
    
      ![](./static/manage-role-bindings.png)

### Access control for Perspectives

  In Harness, the **Perspectives** page shows only the folders that the user has been granted access to. This means that the user cannot see or interact with any folder that they do not have permission to access.

### Access control for Budgets

  A user can create **Budgets** for Perspectives only within the folders that they have been granted access to. For more information about Budgets, go to [Create a Budget](/docs/cloud-cost-management/2-use-cloud-cost-management/6-ccm-budgets/create-a-budget.md).

### Access control for Anomalies

  Similar to budgets, on the **Anomalies** page, you can only view those anomalies associated with the perspectives located within specific folders that you have access to. The anomalies displayed also depend on the Perspective rule that restricts the user to a particular cloud provider account or a cost category, or a region. The out-of-the-box perspectives provided by Harness, as well as any other perspectives outside these folders, are not displayed. For more information about Anomalies, go to [Anomalies](/docs//cloud-cost-management/2-use-cloud-cost-management/5-ccm-cost-anomaly-detection/detect-cloud-cost-anomalies-with-ccm.md).

A user with folder restrictions does not have permission to create new folders. This means that the user can only work within the existing folder structure that has been set up for them by an administrator.


