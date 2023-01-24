---
title: Delegate resources
description: Introduces delegate RESTful resources and the operations they provide.
# sidebar_position: 2
---

Harness API provides the following RESTful resources for working with NextGen delegates. This section introduces the resources and provides information about their requirements and possible workflows. For detailed usage information, see [Harness NextGen Platform API Reference](https://apidocs.harness.io/).

| Resource | Operations |
| :-- | :-- |
| Delegate download resource<br />`download-delegates` | Download YAML files for Kubernetes and Docker delegates. |
| Delegate group tags resource<br />`delegate-group-tags` | Add, retrieve, remove, delete, and list one or more descriptive tags from groups of one or more delegates. |
| Delegate setup resource<br />`delegate-setup` | Perform setup tasks including generating a Helm values YAML file and delegate deletion. | 
| Delegate token resource<br />`delegate-token-ng` | Create or revoke delegate tokens, retrieve delegate tokens by different account and project parameters, and list delegates by token. |

## Use cases for delegate resources

The delegate resources target the following use cases.

| Use case | Resource |
| :-- | :-- |
| Delegate download resource<br />`download-delegates` | Pipeline automation, delegate lifecycle management, GitOps |
| Delegate group tags resource<br />`delegate-group-tags` | Pipeline automation, delegate lifecycle management, GitOps |
| Delegate setup resource<br />`delegate-setup` | Pipeline automation, Helm-based installation, delegate lifecycle management |
| Delegate token resource<br />`delegate-token-ng` |Pipeline automation, delegate lifecycle management, security enforcement |

For information on the basic steps involved in automating delegate installation, see [Automate delegate installation](/docs/platform/2_Delegates/advanced-installation/automate-delegate-installation.md).

## Security

You must have a Harness account and API key to use the operations of the delegate resources. The API key must be configured in your Harness account. 

Requests to delegate resources must include the API key in the request URL or in the `x-api-key` header parameter as shown following:

```
curl -i -X DELETE \
  'https://app.harness.io/gateway/ng/api/delegate-group-tags/{groupIdentifier}?accountIdentifier=string&orgIdentifier=string&projectIdentifier=string' \
  -H 'x-api-key: YOUR_API_KEY_HERE'
```

## Delegate API host and base URL

Delegate resources use the HTTPS addressing scheme with the `app.harness.io/gateway` host. The base URL is https://app.harness.io/gateway. 

```
https://app.harness.io/gateway/ng/api/delegate-resource-name
```

The endpoints for delegate resources begin with the `/ng/api` base path followed by the resource path. In this example, the resource path is the `delegate-resource-name` placeholder.

## Message status

The operations of the delegate resources return with standard HTTP status codes in accord with the semantics of HTTP specified in Internet Engineering Task Force (IETF) RFC 9110. The delegate resources most commonly return the following status codes in responses.

| **Status code** | **Message body** |
| :-- | :-- |
| `HTTP 200` | The standard success response.<br /><br />Depending on the request, the response body may include an entity containing further results. |
| `HTTP 400` |The server is unable to process the request.<br /><br />This response code typically indicates a client error including a malformed or incorrectly framed request or improper routing. |
| `HTTP 500` | The server is unable to process the request.<br /><br />This response code typically indicates a client error including a malformed or incorrectly framed request or improper routing.|