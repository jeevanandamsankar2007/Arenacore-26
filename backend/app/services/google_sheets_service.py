"""
Future Google Sheets Service Isolation Module

This service encapsulates the planned integration with Google Sheets API.
When the senior/organizer activates Google Sheets syncing, service account credentials
can be configured via environment variables without restructuring the core backend.
"""

from typing import Dict, Any, Optional
from backend.app.config import settings

class GoogleSheetsService:
    def __init__(self):
        self.enabled = settings.GOOGLE_SHEETS_ENABLED
        self.spreadsheet_id = settings.GOOGLE_SPREADSHEET_ID
        self.service_account_json = settings.GOOGLE_SERVICE_ACCOUNT_JSON

    def is_configured(self) -> bool:
        """Checks if Google Sheets integration is enabled and configured."""
        return bool(self.enabled and self.spreadsheet_id and self.service_account_json)

    def fetch_registration_statistics(self) -> Dict[str, Any]:
        """
        Future implementation: Fetches live registration counts from Google Sheets.
        Returns empty/unconfigured structure if not enabled yet.
        """
        if not self.is_configured():
            return {
                "configured": False,
                "message": "Google Sheets synchronization is not enabled yet."
            }

        # Future implementation using google-auth and google-api-python-client:
        # e.g., reading range 'Responses!A2:Z' and aggregating team counts
        return {
            "configured": True,
            "total_registrations": 0,
            "total_teams": 0,
            "selected_teams": 0,
            "pending_teams": 0,
            "rejected_teams": 0
        }

google_sheets_service = GoogleSheetsService()
