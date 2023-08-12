// Get the post ID from the endpoint
const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  
  // Update the post
  const updateMyblogPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#title-update-myblog-post").value.trim();
    const content = document
      .querySelector("#content-update-myblog-post")
      .value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${post_id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/dashboard"); // When successful, load the dashboard page
      } else {
        alert("Failed to update a post."); // When unsuccessful, show alert
      }
    }
  };
  
  // Delete the post
  const deleteMyblogPostFormHandler = async (event) => {
    event.preventDefault();
  
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });
  
    if (response.ok) {
      document.location.replace("/dashboard"); // When successful, load the dashboard page
    } else {
      alert("Failed to delete a post."); // When unsuccessful, show alert
    }
  };
  
  // Event listeners
  const updateMyblogPostButton = document.querySelector("#update-myblog-post");
  
  if (updateMyblogPostButton) {
    updateMyblogPostButton.addEventListener("click", updateMyblogPostFormHandler);
  }
  
  const deleteMyblogPostButton = document.querySelector("#delete-myblog-post");
  
  if (deleteMyblogPostButton) {
    deleteMyblogPostButton.addEventListener("click", deleteMyblogPostFormHandler);
  }
  