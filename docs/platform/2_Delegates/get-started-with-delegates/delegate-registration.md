---
title: Delegate registration and verification
description: This topic explains the process used to register and verify a delegate.
# sidebar_position: 2
helpdocs_topic_id: 39tx85rekj
helpdocs_category_id: m9iau0y3hv
helpdocs_is_private: false
helpdocs_is_published: true
---



Delegates register with Harness Manager immediately after they are installed. The process of registration is automatic and takes place when you verify delegate installation. 

The delegate configuration file specifies your Harness account ID. For example, for a Kubernetes delegate, your account ID is specified in the manfiest file. The delegate is registered with your Harness account.

### Installing and registering delegates

### Delegate installation

To install a delegate, follow the instructions for the type of delegate you install and the mode of installation you use. 

- For a Kubernetes delegate, use the instructions in [Install a Kubernetes Delegate](/docs/platform/2_Delegates/advanced-installation/install-a-kubernetes-delegate.md). 
- For a Docker delegate, use the instructions in [Install a Docker Delegate](/docs/platform/2_Delegates/install-delegates/docker-delegates/install-a-docker-delegate.md).

### Delegate registration

Delegates register with Harness Manager during the verification process. The process is as follows:

- You initiate the verification process by clicking **Verify** in the delegate installer. 

- Harness Manager verifies the receipt of heartbeats from the delegate. 

  ![](static/delegate-registration-01.png)

  Heartbeats indicate that the delegate is registering with Harness Manager.  The process of registration might take several minutes.

- After the delegate completes the registration process, the **Verify** screen will indicate that the Delegate is running.

### Manual verification

You can find information on how to manually verify delegate registration on the Verify page in the delegate installation. The basic steps for a Kubernetes delegate follow.

#### Verify a Kubernetes delegate

Check the status of the delegate on your cluster:

```
kubectl describe pod <your-delegate-pod> -n harness-delegate-ng
```

Check the delegate logs:

```
kubectl logs -f <harness-delegate> -n harness-delegate-ng
```

If the pod is not running, check your cluster for the following error:

```
CrashLoopBackOff: Kubernetes Cluster Resources are not available.
```

If you have a `CrashLookpBackOff` error, check the allocation of compute resources including CPU and memory.  

If the delegate does not reach a healthy state, use `kubectl describe` instruction to investigate the problem further:

```
kubectl describe pod <your-delegate-pod> -n harness-delegate-ng
```
