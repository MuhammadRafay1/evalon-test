export default function HostedCardsRecipe(workflowCtx, portal) {
	return {
		"Overview": {
			name: "Overview",
			stepCallback: async () => {
				return workflowCtx.showContent(
					`# Hosted Cards API Recipe Overview\n\nThis recipe guides you through the process of creating, retrieving, and updating Hosted Card resources using the API.\n\n**Steps included:**\n\n1. Create a Hosted Card Resource\n2. Retrieve a Hosted Card by its Resource ID\n3. Update a Hosted Card Resource\n\nFollow each step to interact with the Hosted Cards endpoints and manage your card resources efficiently.`
				);
			},
		},
		"Step 1": {
			name: "Create a Hosted Card Resource",
			stepCallback: async () => {
				return workflowCtx.showEndpoint({
					description: "Creates a HostedCard resource.",
					endpointPermalink: "$e/Hosted%20Cards/CreateHostedCard",
					verify: (response, setError) => {
						if (response.StatusCode == 200) {
							return true;
						} else {
							setError("API Call wasn't able to get a valid response. Please try again.");
							return false;
						}
					},
				});
			},
		},
		"Step 2": {
			name: "Retreive a Hosted Card by its Resource ID",
			stepCallback: async () => {
				return workflowCtx.showEndpoint({
					description: "Retrieve a hosted card resource by its resource ID.",
					endpointPermalink: "$e/Hosted%20Cards/RetrieveHostedCard",
					verify: (response, setError) => {
						if (response.StatusCode == 200) {
							return true;
						} else {
							setError("API Call wasn't able to get a valid response. Please try again.");
							return false;
						}
					},
				});
			},
		},
		"Step 3": {
			name: "Update a Hosted Card Resource",
			stepCallback: async () => {
				return workflowCtx.showEndpoint({
					description: "Overwrite the details of an existing hosted card resource.",
					endpointPermalink: "$e/Hosted%20Cards/UpdateHostedCard",
					verify: (response, setError) => {
						if (response.StatusCode == 200) {
							return true;
						} else {
							setError("API Call wasn't able to get a valid response. Please try again.");
							return false;
						}
					},
				});
			},
		},
	};
}