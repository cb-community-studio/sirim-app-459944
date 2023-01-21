import React from "react";
import { render, screen } from "@testing-library/react";

import SubscribersPage from "../SubscribersPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders subscribers page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SubscribersPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("subscribers-datatable")).toBeInTheDocument();
    expect(screen.getByRole("subscribers-add-button")).toBeInTheDocument();
});
