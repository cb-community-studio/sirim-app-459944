import React from "react";
import { render, screen } from "@testing-library/react";

import PostsPage from "../PostsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders posts page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <PostsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("posts-datatable")).toBeInTheDocument();
    expect(screen.getByRole("posts-add-button")).toBeInTheDocument();
});
