import React from "react";
import { render, screen } from "@testing-library/react";

import SubscribersEditDialogComponent from "../SubscribersEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders subscribers edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <SubscribersEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("subscribers-edit-dialog-component")).toBeInTheDocument();
});
