import React from "react";
import { render, screen } from "@testing-library/react";

import SubscribersCreateDialogComponent from "../SubscribersCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders subscribers create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SubscribersCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("subscribers-create-dialog-component")).toBeInTheDocument();
});
