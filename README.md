# xMatters ---> Ansible Integration
This is part of the xMatters Labs Steps awesome listing. For others, see [here](https://github.com/xmatters/xMatters-Labs-Flow-Steps).

With this step, you can quickly run an ansible playbook from any xMatters flow.

This document details how to install and use this step. 

---------

<kbd>
<img src="https://github.com/xmatters/xMatters-Labs/raw/master/media/disclaimer.png">
</kbd>

---------
# Pre-Requisites
* xMatters account - If you don't have one, [get one](https://www.xmatters.com)! 
* Ansible server with a playbook, and with the xMatters agent installed. For instructions on installing the xMatters agent, see the [xMatters agent help article](https://help.xmatters.com/ondemand/xmodwelcome/xmattersagent/xmatters-agent-topic.htm)

# Files
* [AnsibleStep.zip](./AnsibleStep.zip) - This is the Workflow that holds the Ansible step for easy importing
* [run-playbook.js](./run-playbook.js) - This is the script inside the `Run Playbook` step

# Introduction - How it works
Ansible is a powerful IT automation tool that stresses simplicity and flexibility. This integration adds capability to any xMatters integration to run an ansible playbook in order to further Ansible's capacity.

# Installation

## Ansible Setup
1. On your Ansible server, make sure you have a playbook and an authenticated user to run that playbook
2. Save the playbook name and username to put inside the xMatters step

## xMatters Setup
1. Download the [AnsibleStep.zip](./AnsibleStep.zip) file onto your local computer
2. Navigate to the Developer tab of your xMatters instance
3. Click **Import Plan**, and select the zip file you just downloaded


## Usage
Note: To use the Ansible step, you must have an Ansible server with the xMatters agent installed, for instructions on installing the xMatters agent, [see here](https://help.xmatters.com/ondemand/xmodwelcome/xmattersagent/xmatters-agent-topic.htm)

### Run Playbook Step
1. To use the Run Playbook Step, click and drag it into the flow, then double click the step to edit it
2. In the **Setup** tab, fill out or drag in the required inputs - `Path to Playbook` (note this must be the absolute path, e.g. /etc/hosts, and `Username`
3. In the **Run Location** tab, change it to `xMatters agent`, then select the Ansible server
4. That's it! You now have a step that will run your playbook, note that the step outputs the `Output` of the playbook deployment, the `Exit Code`, and the `Error` if there is one

Here is an example canvas showing a monitoring tool firing to an HTTP trigger to kick off a flow that triggers an Ansible step to query for playbook execution. (Note the step for querying playbook execution is still in develoment.) If remediation has been attempted, then go get the last Git commit details, and the last Jenkins deploy details and finally, trigger an xMatters alert with the Git and Jenkins details. However, if the playbook has not been executed first create a jira issue, then, using the step outlined in this article, fire the playbook. If triggering the remediation failed, then add a comment to the jira ticket for someone to investigate. If the remediation succeeded, add a comment and then close the issue. 

<kbd>
	<img src="/media/canvas.png">
</kbd>
