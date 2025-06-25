import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/authOptions";

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // In a real implementation, you would call GitHub API:
    // const response = await fetch('https://api.github.com/user/repos', {
    //   headers: {
    //     'Authorization': `token ${session.user?.accessToken}`,
    //     'Accept': 'application/vnd.github.v3+json',
    //   },
    // });
    // const repos = await response.json();

    // For now, return mock data
    const mockRepos = [
      {
        id: 1,
        name: "my-react-app",
        full_name: "username/my-react-app",
        description: "A React application with modern features",
        html_url: "https://github.com/username/my-react-app",
        clone_url: "https://github.com/username/my-react-app.git",
        private: false,
        language: "TypeScript",
        updated_at: "2024-01-15T10:30:00Z"
      },
      {
        id: 2,
        name: "vue-dashboard",
        full_name: "username/vue-dashboard",
        description: "Vue.js dashboard with analytics",
        html_url: "https://github.com/username/vue-dashboard",
        clone_url: "https://github.com/username/vue-dashboard.git",
        private: false,
        language: "Vue",
        updated_at: "2024-01-10T15:45:00Z"
      },
      {
        id: 3,
        name: "angular-ecommerce",
        full_name: "username/angular-ecommerce",
        description: "E-commerce platform built with Angular",
        html_url: "https://github.com/username/angular-ecommerce",
        clone_url: "https://github.com/username/angular-ecommerce.git",
        private: true,
        language: "TypeScript",
        updated_at: "2024-01-05T09:20:00Z"
      },
      {
        id: 4,
        name: "svelte-portfolio",
        full_name: "username/svelte-portfolio",
        description: "Personal portfolio website using Svelte",
        html_url: "https://github.com/username/svelte-portfolio",
        clone_url: "https://github.com/username/svelte-portfolio.git",
        private: false,
        language: "Svelte",
        updated_at: "2023-12-28T14:10:00Z"
      },
      {
        id: 5,
        name: "nextjs-blog",
        full_name: "username/nextjs-blog",
        description: "Blog platform built with Next.js",
        html_url: "https://github.com/username/nextjs-blog",
        clone_url: "https://github.com/username/nextjs-blog.git",
        private: false,
        language: "JavaScript",
        updated_at: "2023-12-20T16:25:00Z"
      }
    ];

    return NextResponse.json(mockRepos);
  } catch (error) {
    console.error("GitHub repos API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 }
    );
  }
}
